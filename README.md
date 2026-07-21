# Subir Imagem VPS (Homologação)

## Build e salvar em arquivo (rodar localmente, no PowerShell)

```powershell
docker build --no-cache --build-arg CONFIGURATION=homologation -t web-comanda-unica-admin:hml .

if ($LASTEXITCODE -eq 0) {
    docker save -o web-comanda-unica-admin-hml.tar web-comanda-unica-admin:hml
    $tarFile = Get-Item web-comanda-unica-admin-hml.tar
    $sizeInMB = [int]($tarFile.Length / 1MB)
    Write-Host "TAR gerado: $sizeInMB MB"
}
```

## Enviar para a VPS via SCP

```bash
scp web-comanda-unica-admin-hml.tar usuario@187.127.23.114:/home/usuario/
```

## Carregar e rodar na VPS (produção usa a porta 3000, homologação usa 3200)

```bash
docker load -i web-comanda-unica-admin-hml.tar

docker rm -f web-comanda-unica-admin-hml

docker run -d --name web-comanda-unica-admin-hml --restart always -p 3200:80 web-comanda-unica-admin:hml
```

# Configurar Domínio

Você precisa fazer duas coisas: configurar o DNS e configurar o Nginx como reverse proxy na VPS.

## 1. Configuração DNS

No painel de DNS do domínio comandaunica.com.br (Registro.br, Cloudflare, etc.), crie estes registros:

| Tipo | Nome | Valor |
|---|---|---|
| A | @ | 187.127.23.114 |
| CNAME | www | comandaunica.com.br |
| A | hml | 187.127.23.114 |

## 2. Configuração Nginx na VPS

O container Docker já roda o Nginx internamente na porta 80, mapeada para a porta 3200 do host (homologação). Agora você precisa de um Nginx no host como reverse proxy para responder na porta 80/443 com o domínio.

Na VPS, execute:

Crie o arquivo de configuração do site:

```bash
sudo nano /etc/nginx/sites-available/comandaunicahml
```

Cole este conteúdo:

```nginx
server {
    listen 80;
    server_name hml.comandaunica.com.br www.hml.comandaunica.com.br;

    location / {
        proxy_pass http://127.0.0.1:3200;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Ative o site e reinicie:

```bash
sudo ln -s /etc/nginx/sites-available/comandaunicahml /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Após o DNS propagar (pode levar minutos a horas), instale o certificado SSL:

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d hml.comandaunica.com.br
```
