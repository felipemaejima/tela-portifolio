import Project from "./Project";
import Title from "./Title";

export default function Projects() {
  return (
    <div className="text-center m-[50px]">
      <Title>Projetos</Title>
      <div className="flex flex-wrap justify-around">
        <Project>
          <img
            src="https://media.licdn.com/dms/image/D4D12AQFIfYxVVBBwdw/article-cover_image-shrink_600_2000/0/1674385627966?e=2147483647&v=beta&t=TaIdkk6YqZ780jGIY-1XJ0hw6AK7HH6m2HFYwV4tlqs"
            alt=""
          />
        </Project>
        <Project>
          <img
            src="https://media.licdn.com/dms/image/D4D12AQFIfYxVVBBwdw/article-cover_image-shrink_600_2000/0/1674385627966?e=2147483647&v=beta&t=TaIdkk6YqZ780jGIY-1XJ0hw6AK7HH6m2HFYwV4tlqs"
            alt=""
          />
        </Project>
        <Project>
          <img
            src="https://media.licdn.com/dms/image/D4D12AQFIfYxVVBBwdw/article-cover_image-shrink_600_2000/0/1674385627966?e=2147483647&v=beta&t=TaIdkk6YqZ780jGIY-1XJ0hw6AK7HH6m2HFYwV4tlqs"
            alt=""
          />
        </Project>
      </div>
    </div>
  );
}
