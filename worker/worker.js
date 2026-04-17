export default {
  async fetch(request) {
    try {
      const { message } = await request.json();

      return new Response(JSON.stringify({
        reply: "🤖 Nebula AI dice: " + message
      }), {
        headers: { "Content-Type": "application/json" }
      });

    } catch (error) {
      return new Response(JSON.stringify({
        reply: "Error procesando mensaje"
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }
  }
}
