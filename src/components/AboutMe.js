function AboutMe() {
  const topDesserts = [
    {
      id: '1',
      title: "Tiramisu",
      description: 'The best tiramisu',
      price: '$5.00',
    },
    {
      id: '2',
      title: 'Choco Cake',
      description: 'The best Choco Cake',
      price: '$10.00',
    },
    {
      id: '3',
      title: 'Lemon',
      description: 'The best Lemon',
      price: '$2.00',
    },
  ];

  const listItems = topDesserts.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li>{itemText}</li>
  })

  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
    
  );
};

export default AboutMe;