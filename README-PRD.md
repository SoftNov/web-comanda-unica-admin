# Subir Imagem VPS (Produção)

Guia exclusivo de produção. Para homologação, ver `README.md` (mesmo fluxo, trocando
`production` por `homologation`, a tag `:prd` por `:hml` e a porta `3000` por `3200`).

## Build e salvar em arquivo (rodar localmente, no PowerShell)

```powershell
docker build --no-cache --build-arg CONFIGURATION=production -t web-comanda-unica-admin:prd .

if ($LASTEXITCODE -eq 0) {
    docker save -o web-comanda-unica-admin-prd.tar web-comanda-unica-admin:prd
    $tarFile = Get-Item web-comanda-unica-admin-prd.tar
    $sizeInMB = [int]($tarFile.Length / 1MB)
    Write-Host "TAR gerado: $sizeInMB MB"
}
```

`CONFIGURATION=production` usa a configuration `production` do `angular.json` (URLs de API de
produção, ex.: `api.comandaunica.com.br`) — confira o `environment` correspondente antes de buildar.

## Enviar para a VPS via SCP

```bash
scp web-comanda-unica-admin-prd.tar usuario@187.127.23.114:/home/usuario/
```

## Carregar e rodar na VPS (produção usa a porta 3000)

```bash
docker load -i web-comanda-unica-admin-prd.tar

docker rm -f web-comanda-unica-admin-prd

docker run -d --name web-comanda-unica-admin-prd --restart always -p 3000:80 web-comanda-unica-admin:prd
```

# Configurar Domínio

## 1. Configuração DNS

No painel de DNS do domínio comandaunica.com.br, confirme os registros:

| Tipo | Nome | Valor |
|---|---|---|
| A | @ | 187.127.23.114 |
| CNAME | www | comandaunica.com.br |

## 2. Configuração Nginx na VPS

O container roda o Nginx internamente na porta 80, mapeada para a porta 3000 do host
(produção). Configure um Nginx no host como reverse proxy para responder na 80/443 com o domínio.

```bash
sudo nano /etc/nginx/sites-available/comandaunicaprd
```

```nginx
server {
    listen 80;
    server_name comandaunica.com.br www.comandaunica.com.br;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/comandaunicaprd /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Após o DNS propagar:

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d comandaunica.com.br -d www.comandaunica.com.br
```
