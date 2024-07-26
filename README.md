* This short Airbnb clone website is deployed in AWS Lambda within free tier. 
* It could experience Lambda coldstart without a proper warmer schedule.
* @TODO: properly use S3 to relagate incremental static assets, instead of fetching all images from server-side before sending to clients, which is currently not optimized.
* Initial loading of page may not have all images loaded.
* Images are hosted for free at Supabase.
* Register/Login with Google/Facebook are supported
* Website: https://airnext.thangtrandev.net
