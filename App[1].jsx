import { useState } from "react";

const routeDays = [
  {
    day: "Ден 1",
    title: "София → Видин → Орадеа",
    distance: "~420 км",
    time: "6–7 ч.",
    highlights: [
      "Преминаване през Дунав мост 2",
      "Разходка в Орадеа (бароков център, термални бани)"
    ],
    camping: "Camping Route Ro или зона край Орадеа"
  },
  {
    day: "Ден 2",
    title: "Орадеа → Сибиу → Трансалпина",
    distance: "~250 км",
    time: "4 ч.",
    highlights: [
      "Разглеждане на Сибиу",
      "Начало на Трансалпина DN67C – най-високият път в Румъния"
    ],
    camping: "Къмпинг край езерото Oașa или Urdele"
  },
  {
    day: "Ден 3",
    title: "Трансалпина → Турда",
    distance: "~180 км",
    time: "4 ч.",
    highlights: [
      "Трансалпина – панорамни гледки",
      "Посещение на Salina Turda и Cheile Turzii"
    ],
    camping: "Camping Fain, Турда"
  }
];

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Кемпер маршрут: През Видин</h1>
      {!selectedDay && (
        <div>
          {routeDays.map((day, index) => (
            <div key={index} onClick={() => setSelectedDay(day)} style={{ border: "1px solid #ccc", padding: 10, margin: 10, cursor: "pointer" }}>
              <strong>{day.day}</strong> – {day.title}
            </div>
          ))}
        </div>
      )}
      {selectedDay && (
        <div>
          <button onClick={() => setSelectedDay(null)} style={{ marginBottom: 10 }}>← Назад</button>
          <h2>{selectedDay.day}: {selectedDay.title}</h2>
          <p><strong>Разстояние:</strong> {selectedDay.distance}</p>
          <p><strong>Време за път:</strong> {selectedDay.time}</p>
          <p><strong>Акценти:</strong></p>
          <ul>
            {selectedDay.highlights.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p><strong>Къмпинг:</strong> {selectedDay.camping}</p>
        </div>
      )}
    </div>
  );
}