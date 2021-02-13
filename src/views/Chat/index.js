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

  

  function handleComments(e) {
    if (e.keyCode === 13) {
      const addComments = [...comments, {idComment: Math.random() * (100000 - 1) + 1,strComment}];
      setComments(addComments);
      setStrComment("");
    }
  }

  const handleReactionClick = idComment => viewReactions ? setViewReactions(false) : setViewReactions(idComment)

  function handleClickIcons(e, val) {
    const addComments = [...comments, {idComment: Math.random() * (100000 - 1) + 1,strComment: val}]
    setComments(addComments)
    setViewIcons(false);
  }

  const getFirstReaction = (newReaction) => {return {reaction:newReaction,cantidad:1}}

  const createReactionsArray = (oldComment,newReactionObject) => {
    const newComments = comments.map (comment => comment.idComment === oldComment.idComment ? {...oldComment,reactions:[newReactionObject]} : comment)
    setComments(newComments)
  }

  const addToReactionsArray = (oldComment,newReaction) => {
    const existingReaction = oldComment.reactions.find(item => item.reaction === newReaction)
    const newReactionsArray = existingReaction ? oldComment.reactions.map(reaction => reaction.reaction === newReaction ? {...reaction,cantidad:reaction.cantidad+1}:reaction) : [...oldComment.reactions,{reaction:newReaction,cantidad:1}]
    const newComments = comments.map (comment => comment.idComment === oldComment.idComment ? {...oldComment,reactions:newReactionsArray} : comment)
    setComments(newComments)
  }

  const handleReaction = (e,id) =>{
    const newReaction = e.target.innerHTML
    const oldComment = comments.find(item => item.idComment === id)
    oldComment.reactions ? addToReactionsArray(oldComment,newReaction) : createReactionsArray(oldComment,getFirstReaction(newReaction))
    setViewReactions(false)
  }

  return (
    <div className={`bg-secondary-back c-base ${styles.chat}`}>
      <div className={styles.feed}>
        <div className={styles.stackComments}>
          {comments.length &&
            comments.map(({ idComment, strComment, reactions }, key) => {
              return (
                <div className={styles.wrapComment}>
                  <div className={styles.reaction}>
                    {/* FIXME: 3: Mostrar popUp de reacciones y asignar un areaccion a comentario */}
                    {viewReactions === idComment && (
                      <div className={styles.reactionSelector}>
                        {REACTIONS_LIST.map((icon) => {
                          return <div className={styles.iReaction} onClick={(e)=>handleReaction(e,idComment)}>{icon}</div>;
                        })}
                      </div>
                    )}
                    <div className={styles.iconsReaction} onClick={() => handleReactionClick(idComment)}>
                    😀
                    </div>
                  </div>
                  <div className={styles.comment}>
                    <span>{strComment}</span>
                      {
                       reactions ?
                       <div className={styles.selectedMotion}> 
                        {reactions.map(item=><> <span>{item.reaction}</span><span>{item.cantidad}</span> </>)}
                       </div>
                        : null
                      }
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
