module.exports = ({ env }) => ({
  
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('papri'),
        api_key: env('673491644928415'),
        api_secret: env('Sk2d2URRPVUVgTKraUZkdQKZv1k'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
   
  });