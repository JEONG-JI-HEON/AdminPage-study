import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/user/login", async ({ request }) => {
    const newPost = await request.json();
    // console.log(newPost);

    const response = {
      ...newPost[0],
      accessToken: "토큰부여",
    };

    // console.log(response);

    return HttpResponse.json(response);
  }),
];
