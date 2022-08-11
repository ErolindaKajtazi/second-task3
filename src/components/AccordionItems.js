import React from "react";
import Accordion from "./Accordion";

function AccordionItems() {
  const accordionData = [
    {
      title:
        "How does Parkname seperate itself from other domain name parking companies?",
      content:
        "Your domains are a valuable online property. As in any investments, you want the most efficient, easy way to make sure your property is going to be profitable.Do you own more than 1000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.",
    },
    {
      title: "Is Parkname Parking actually free?",
      content:
        "Your domains are a valuable online property. As in any investments, you want the most efficient, easy way to make sure your property is going to be profitable.Do you own more than 1000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.",
    },
    {
      title: "What you do?",
      content:
        "Your domains are a valuable online property. As in any investments, you want the most efficient, easy way to make sure your property is going to be profitable.Do you own more than 1000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.",
    },
    {
      title: "When was Parkname first founded?",
      content:
        "Your domains are a valuable online property. As in any investments, you want the most efficient, easy way to make sure your property is going to be profitable.Do you own more than 1000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.",
    },
  ];

  return (
    <div className="accordion">
    {accordionData.map(({ title, content }) => (
      <Accordion title={title} content={content} />
    ))}
  </div>
  )
}

export default AccordionItems;
