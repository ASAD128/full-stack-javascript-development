const env =process.env;

export const nodeEnv = env.NODE_ENV || 'developemnt';
console.log('Config');

export default {
   port : env.PORT || 8080
}
