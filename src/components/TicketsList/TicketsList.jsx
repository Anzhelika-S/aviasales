import TicketsSort from "../TicketsSort";
import Ticket from "../Ticket";

import styles from "./TicketsList.module.scss";

function TicketsList() {
  const list = [
    {
      price: 1200,
      carrier: "S7",
      segments: [
        {
          origin: "MSC",
          destination: "CHN",
          date: "12/01",
          stops: "1",
          duration: "17",
        },
        {
          origin: "MSC",
          destination: "CHN",
          date: "12/01",
          stops: "1",
          duration: "17",
        },
      ],
    },
    {
      price: 1200,
      carrier: "S7",
      segments: [
        {
          origin: "MSC",
          destination: "CHN",
          date: "12/01",
          stops: "1",
          duration: "17",
        },
        {
          origin: "MSC",
          destination: "CHN",
          date: "12/01",
          stops: "1",
          duration: "17",
        },
      ],
    },
    {
      price: 1200,
      carrier: "S7",
      segments: [
        {
          origin: "MSC",
          destination: "CHN",
          date: "12/01",
          stops: "1",
          duration: "17",
        },
        {
          origin: "MSC",
          destination: "CHN",
          date: "12/01",
          stops: "1",
          duration: "17",
        },
      ],
    },
  ];

  const tickets = list.map((ticket) => {
    return (
      <Ticket
        key={list.indexOf(ticket)}
        price={ticket.price}
        carrier={ticket.carrier}
      />
    );
  });

  return (
    <>
      <TicketsSort />
      <ul className={styles.list}>{tickets}</ul>
    </>
  );
}

export default TicketsList;
