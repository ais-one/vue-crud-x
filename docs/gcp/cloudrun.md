
gcloud services enable run.googleapis.com

See [basic.md](basic.md) -> Docker Build And Push To gcr.io

gcloud run deploy [service name] --image gcr.io/$GOOGLE_CLOUD_PROJECT/helloworld --platform managed --region asia-southeast1 --allow-unauthenticated

gcloud container images delete gcr.io/$GOOGLE_CLOUD_PROJECT/helloworld

gcloud run services delete [service name] --platform managed --region asia-southeast1

gcloud container images list