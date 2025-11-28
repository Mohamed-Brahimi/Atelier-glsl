FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install Node.js and tools
RUN apt-get update && apt-get install -y \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Install GLSL tools
RUN npm install -g http-server glslify glslCanvas

WORKDIR /workspace

EXPOSE 8080
