import { j as json } from './index-CccDCyu_.js';
import { d as data } from './data-DReeFxI_.js';

const GET = ({ params }) => {
  const dinosaur = data.find((item) => {
    return item.name.toLowerCase() === params.id.toLowerCase();
  });
  if (dinosaur) {
    return json(dinosaur);
  }
  return json({ error: "Not found" }, { status: 404 });
};

export { GET };
//# sourceMappingURL=_server.ts-im-C-Wn6.js.map
