//Librerias
import React, { useState } from "react";

//Estilos
import styles from "./index.module.sass";

//Constantes
const ICON_LIST = [
  "😀",
  "😁",
  "😂",
  "😃",
  "😄",
  "😅",
  "😆",
  "😇",
  "😈",
  "😉",
  "😊",
  "😋",
  "😌",
  "😍",
  "😎",
  "😏",
  "😐",
  "😑",
  "😒",
  "😓",
  "😔",
  "😕",
  "😖",
  "😗",
  "😘",
  "😙",
  "😚",
  "😛",
  "😜",
  "😝",
  "😞",
  "😟",
  "😠",
  "😡",
  "😢",
  "😣",
  "😤",
  "😥",
  "😦",
  "😧",
  "😨",
  "😩",
  "😪",
  "😫",
  "😬",
  "😭",
  "😮",
  "😯",
  "😰",
  "😱",
  "😲",
  "😳",
  "😴",
  "😵",
  "😶",
  "😷",
  "😸",
  "😹",
  "😺",
  "😻",
  "😼",
  "😽",
  "😾",
  "😿",
  "🙀",
  "🙁",
  "🙂",
  "🙃",
  "🙄",
  "🙅",
  "🙆",
  "🙇",
  "🙈",
  "🙉",
  "🙊",
  "🙋",
  "🙌",
  "🙍",
  "🙎",
  "🙏",
  ",🤍",
  "🤎",
  "🤏",
  "🤐",
  "🤑",
  "🤒",
  "🤓",
  "🤔",
  "🤕",
  "🤖",
  "🤗",
  "🤘",
  "🤙",
  "🤚",
  "🤛",
  "🤜",
  "🤝",
  "🤞",
  "🤟",
  "🤠",
  "🤡",
  "🤢",
  "🤣",
  "🤤",
  "🤥",
  "🤦",
  "🤧",
  "🤨",
  "🤩",
  "🤪",
  "🤫",
  "🤬",
  "🤭",
  "🤮",
  "🤯",
  "🤰",
  "🤱",
  "🤲",
  "🤳",
  "🤴",
  "🤵",
  "🤶",
  "🤷",
  "🤸",
  "🤹",
  "🤺",
  "🤻",
  "🤼",
  "🤽",
  "🤾",
  "🤿",
  "🥀",
  "🥁",
  "🥂",
  "🥃",
  "🥄",
  "🥅",
  "🥆",
  "🥇",
  "🥈",
  "🥉",
  "🥊",
  "🥋",
  "🥌",
  "🥍",
  "🥎",
  "🥏",
  "🥐",
  "🥑",
  "🥒",
  "🥓",
  "🥔",
  "🥕",
  "🥖",
  "🥗",
  "🥘",
  "🥙",
  "🥚",
  "🥛",
  "🥜",
  "🥝",
  "🥞",
  "🥟",
  "🥠",
  "🥡",
  "🥢",
  "🥣",
  "🥤",
  "🥥",
  "🥦",
  "🥧",
  "🥨",
  "🥩",
  "🥪",
  "🥫",
  "🥬",
  "🥭",
  "🥮",
  "🥯",
  "🥰",
  "🥱",
  "🥲",
  "🥳",
  "🥴",
  "🥵",
  "🥶",
  "🦀",
  "🦁",
  "🦂",
  "🦃",
  "🦄",
  "🦅",
  "🦆",
  "🦇",
  "🦈",
  "🦉",
  "🦊",
  "🦋",
  "🦌",
  "🦍",
  "🦎",
  "🦏",
  "🦐",
  "🦑",
  "🦒",
  "🦓",
  "🦔",
  "🦕",
  "🦖",
  "🦗",
  "🦘",
  "🦙",
  "🦚",
  "🦛",
  "🦜",
  "🦝",
  "🦞",
  "🦟",
  "🦠",
  "🦡",
  "🦢",
  "🦥",
  "🦦",
  "🦧",
  "🦨",
  "🦩",
  "🦪",
  "🦮",
  "🦯",
  "🦰",
  "🦱",
  "🦲",
  "🦳",
  "🦴",
  "🦵",
  "🦶",
  "🦷",
  "🦸",
  "🦹",
  "🦺",
  "🦻",
  "🦼",
  "🦽",
  "🦾",
  "🦿",
  "🧀",
  "🧁",
  "🧂",
  "🧃",
  "🧄",
  "🧅",
  "🧆",
  "🧇",
  "🧈",
  "🧉",
  "🧊",
  "🧐",
  "🧑",
  "🧒",
  "🧓",
  "🧔",
  "🧕",
  "🧖",
  "🧗",
  "🧘",
  "🧙",
  "🧚",
  "🧛",
  "🧜",
  "🧝",
  "🧞",
  "🧟",
  "🧠",
  "🧡",
  "🧢",
  "🧣",
  "🧤",
  "🧥",
  "🧦",
  "🧧",
  "🧨",
  "🧩",
  "🧪",
  "🧫",
  "🧬",
  "🧭",
  "🧮",
  "🧯",
  "🧰",
  "🧱",
  "🧲",
  "🧳",
  "🧴",
  "🧵",
  "🧶",
  "🧷",
  "🧸",
  "🧹",
  "🧺",
  "🧻",
  "🧼",
  "🧽",
  "🧾",
  "🧿",
];

const REACTIONS_LIST = ["😍", "😈", "😱", "😡", "😭"];

export default function Chat() {
  //State inicial para los commentarios
  const [strComment, setStrComment] = useState("");
  const [comments, setComments] = useState([]);

  const [viewIcons, setViewIcons] = useState(false);

  const [viewReactions, setViewReactions] = useState(false);

  const addComments = comments;

  function handleComments(e) {
    if (e.keyCode === 13) {
      addComments.push({
        idComment: Math.random() * (100000 - 1) + 1,
        strComment,
        reaction: "",
      });
      setComments(addComments);
      setStrComment("");
    }
  }

  function handleClickIcons(e, val) {
    addComments.push({
      idComment: Math.random() * (100000 - 1) + 1,
      strComment: val,
      reaction: "",
    });
    setViewIcons(false);
  }

  return (
    <div className={`bg-secondary-back c-base ${styles.chat}`}>
      <div className={styles.feed}>
        <div className={styles.stackComments}>
          {comments.length &&
            comments.map(({ idComment, strComment, reaction }, key) => {
              return (
                <div className={styles.wrapComment}>
                  <div className={styles.reaction}>
                    {/* FIXME: 3: Mostrar popUp de reacciones y asignar un areaccion a comentario */}
                    {viewReactions && (
                      <div className={styles.reactionSelector}>
                        {REACTIONS_LIST.map((icon) => {
                          return <div className={styles.iReaction}>{icon}</div>;
                        })}
                      </div>
                    )}
                    <div className={styles.iconsReaction} onClick={() => setViewReactions(!viewReactions)}>
                      😀
                    </div>
                  </div>
                  <div className={styles.comment}>
                    <span>{strComment}</span>
                    {/* FIXME: 4: Mostrar reacción en cada comentario e incrementar el contador por cada click en su misma reacción~ Tarea para el equipo */}
                    {/* <div className={styles.selectedMotion}>
                      <span>😈 </span>
                      <span>1</span>
                    </div> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles.ctrls}>
        <div className={styles.inputText}>
          {/* FIXME: 1: Enviar el valor del Input al listado de comentarios */}
          <input value={strComment} onKeyUp={handleComments} onChange={(e) => setStrComment(e.target.value)} type="text" placeholder="Escribe un comentario..." className={styles.textInputCtrl} />
          <div className={styles.iconsTrigger} onClick={(e) => setViewIcons(!viewIcons)}>
            😀
          </div>
          {/* FIXME: 2: Habilitar panel de iconos para enviar como comentario al chat */}
          {(viewIcons && (
            <div className={styles.iconsList}>
              <div className={styles.icons}>
                {ICON_LIST &&
                  ICON_LIST.map((val) => {
                    return (
                      <div className={styles.emoticon} onClick={(e) => handleClickIcons(e, val)}>
                        {val}
                      </div>
                    );
                  })}
              </div>
              <div className={styles.triangle}></div>
            </div>
          )) ||
            ""}
        </div>
      </div>
    </div>
  );
}
