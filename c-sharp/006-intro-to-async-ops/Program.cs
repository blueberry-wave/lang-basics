WriteLine("006-intro-to-async-await-ops");

HttpClient client = new();

HttpResponseMessage res = await client.GetAsync("http://www.apple.com/");

WriteLine("Apple's home page hsa {0:N0} bytes", res.Content.Headers.ContentLength);