export const Estate = ({ estate }) => (
  <main className="estate">
    <h2>{estate.title}</h2>
    <img src={estate.photo} alt={estate.title} className="estate__photo" />
    <p>{estate.text}</p>
    <p><strong>Cena:</strong> {estate.price.toLocaleString('cs-CZ')} Kč</p>
    <p><strong>Lokalita:</strong> {estate.city}</p>
    <section>
      <h3>Kontakt</h3>
      <p><strong>Jméno:</strong> {estate.contact.name}</p>
      <p><strong>Email:</strong> <a href={`mailto:${estate.contact.email}`}>{estate.contact.email}</a></p>
      <p><strong>Telefon:</strong> <a href={`tel:${estate.contact.phone}`}>{estate.contact.phone}</a></p>
    </section>
  </main>
);