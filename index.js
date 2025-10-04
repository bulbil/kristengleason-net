export default {
  async fetch(request, env, ctx) {
    const msg = "ヽ༼ຈل͜ຈ༽ﾉ / hurrah! / ヽ༼ຈل͜ຈ༽ﾉ";
    console.log(msg);
    return new Response(msg, { status: 200 });
  },
};
