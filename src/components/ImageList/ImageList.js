import React from "react";

import { ProfileRelationsBoxWrapper } from "../ProfileRelations";

function ImageList({ list, title }) {
  const fracionedList = list.slice(0, 6);
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {title} ({list.length})
      </h2>
      <ul>
        {fracionedList.map((item) => {
          return (
            <li key={item.id}>
              <a href={`/communities/${item.id}`}>
                <img src={item.imageUrl} />
                <span>{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>

      {list.length > 6 ? <a className="boxLink">Ver mais</a> : <></>}
    </ProfileRelationsBoxWrapper>
  );
}

export default ImageList;
