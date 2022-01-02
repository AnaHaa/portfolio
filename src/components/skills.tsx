/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import './hideScrollbar.css';

const getItems = () => Array(20)
  .fill(0)
  .map((_, ind) => ({ id: `element-${ind}` }));

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);

  return (
    <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <AiOutlineArrowLeft size="32" />
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <AiOutlineArrowRight size="32" />
    </button>
  );
}

function Card({
  onClick, selected, title, itemId,
}: any) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div>
      <div className="card w-96">
        <div>{title}</div>
      </div>
    </div>
  );
}

function Skills() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id: any) => !!selected.find((el) => el === id);

  const handleClick = (id: any) => ({ getItemById, scrollToItem }: any) => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) => (itemSelected
      ? currentSelected.filter((el) => el !== id)
      : currentSelected.concat(id)));
  };

  return (
    <div className="md:ml-16 md:mt-16 flex-1 p-16">
      <div className="w-full text-center pb-16">
        Skills go here
      </div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {items.map(({ id }) => (
          <Card
            itemId={id} // NOTE: itemId is required for track items
            title={id}
            key={id}
            onClick={handleClick(id)}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}

export default Skills;
