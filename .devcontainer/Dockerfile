FROM mcr.microsoft.com/devcontainers/typescript-node:4-22-trixie
COPY cert.crt /usr/local/share/ca-certificates/
RUN update-ca-certificates
ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/cert.crt
