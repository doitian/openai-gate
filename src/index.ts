import useReflare from 'reflare';

export default {
  async fetch(
    request: Request,
  ): Promise<Response> {
    const reflare = await useReflare();

    reflare.push({
      path: '/*',
      upstream: {
        domain: 'api.openai.com',
        protocol: 'https',
      },
    });

    return reflare.handle(request);
  },
};
