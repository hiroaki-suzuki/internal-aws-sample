FROM public.ecr.aws/nginx/nginx:1.23.3

WORKDIR /tmp
RUN curl -fsSL https://deb.nodesource.com/setup_19.x | sh - && \
  apt-get install -y nodejs

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./start.sh /opt/start.sh
COPY ./start-dev.sh /opt/start-dev.sh
RUN chmod 744 /opt/start.sh /opt/start-dev.sh

CMD ["/opt/start.sh"]