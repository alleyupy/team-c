
 /* import Photo from "./photo"; */

export default function TeamSection({
  members = [],
  layout = "grid",
}) {
  return (
    <section className={`team-section team-${layout}`}>
      <div className="team-cards">
        {members.map((member) => (
          <Photo
            key={member.id}
            name={member.name}
            image={member.img}
          />
        ))}
      </div>

      {layout === "single" && (
        <div className="team-divider" />
      )}
    </section>
  );
}
