var body = $response.body.replace(/result":\d/g, 'result":0'); $done({body});
