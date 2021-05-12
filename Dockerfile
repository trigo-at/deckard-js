FROM ghcr.io/trigo-at/node-base:14.7.0 as builder

RUN npm run build-storybook


FROM quay.io/centos7/nginx-116-centos7
COPY --from=builder /app/docs .
# COPY docs .

# Run script uses standard ways to run the application
CMD nginx -g "daemon off;"
