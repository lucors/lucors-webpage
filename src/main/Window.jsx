import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import $ from "jquery";
import {
  byId,
  deleteWindowById,
  isCurrent,
  setCurrentWindowById,
  updateWindow,
} from "../store/windowsSlice";
import "./Window.css";
import { cursor, flags } from "../backgroundEvents";
import store from "../store/store";

export default function Window({ menu, data }) {
  const windowRef = useRef(null);
  const draggableRef = useRef(null);
  const headerRef = useRef(null);

  const collapsed = data?.collapsed;
  const expanded = data?.expanded;
  const dragging = data?.dragging;
  const id = data?.id;
  const x = data?.x;
  const y = data?.y;
  const width = data?.width;
  const height = data?.height;

  const dispatch = useDispatch();
  const current = useSelector((state) => isCurrent(state, id));
  const mobile = useSelector((state) => state.screen.mobile);

  function stored() {
    return byId(store.getState(), id);
  }

  function mouseDownHandler(event) {
    if (store.getState().screen.mobile || !windowRef?.current) return;
    flags.dragging = true;
    $(document.body).addClass("nonselect");
    dispatch(setCurrentWindowById(id));
    const updateEntity = {
      id,
      dragging: true,
      expanded: false,
      startX: $(windowRef.current).position().left,
      startY: $(windowRef.current).position().top,
    };
    if (stored()?.expanded) {
      updateEntity.startY = 0;
      updateEntity.startX = event.pageX - stored()?.width/2;
      updateEntity.y = 0;
      updateEntity.x = event.pageX - stored()?.width/2;
    }
    dispatch(updateWindow(updateEntity));
    cursor.tooglePointer();
  }

  function close() {
    dispatch(deleteWindowById(id));
  }

  function collapseToggle() {
    dispatch(updateWindow({ id, collapsed: !collapsed }));
  }

  function expandToggle() {
    const updateEntity = { id, expanded: !expanded };
    if (!expanded) {
      updateEntity.startX = data.x;
      updateEntity.startY = data.y;
      updateEntity.x = 0;
      updateEntity.y = 0;
    } else {
      updateEntity.x = data.startX;
      updateEntity.y = data.startY;
    }
    dispatch(updateWindow(updateEntity));
  }

  function setCurrent() {
    dispatch(setCurrentWindowById(id));
  }

  useEffect(() => {
    if (!draggableRef?.current || !windowRef?.current) return;
    $(draggableRef.current).on("mousedown", mouseDownHandler);
    $(windowRef.current).on("mousedown", setCurrent);
    windowRef.current.ontransitionend = () => {
      if (stored()?.collapsed) windowRef.current.style.visibility = "hidden";
    };

    if (!stored()?.expanded) {
      const width = $(windowRef.current).width();
      const height = $(windowRef.current).height();
      dispatch(updateWindow({ id, width, height }));
    }

    return () => {
      if (!draggableRef?.current || !windowRef?.current) return;
      windowRef.current.ontransitionend = undefined;
      $(draggableRef.current).off("mousedown");
      $(windowRef.current).off("mousedown");
    }
  }, []);

  useEffect(() => {
    if (mobile && !stored()?.expanded) expandToggle();
  }, [mobile]);

  useEffect(() => {
    if (!collapsed) windowRef.current.style.visibility = "visible";
  }, [collapsed]);

  return (
    <div
      data-id={data.id}
      className={`window ${current ? "current" : ""} ${
        collapsed ? "collapsed" : ""
      } ${expanded ? "expanded" : ""} ${dragging ? "dragging" : ""}`}
      style={{
        top: y,
        left: x,
        width,
        height,
      }}
      ref={windowRef}
    >
      <div className="body">
        <div className="header" ref={headerRef}>
          <div className="title">
            <img className="icon" src={data.icon} />
            <span className="value draggable">{data.title}</span>
          </div>
          <div className="wdz draggable" ref={draggableRef}></div>
          <div className="control">
            <div className="wca collapse" onClick={collapseToggle}>
              <span>━</span>
            </div>
            {!mobile && (
              <div className="wca expand" onClick={expandToggle}>
                {expanded ? "❐" : "☐"}
              </div>
            )}
            <div className="wca close" onClick={close}>
              <span>✕</span>
            </div>
          </div>
        </div>
        <div className="main">
          {menu && <div className="left">{menu}</div>}
          <div className="right">
            <p className="section mwem30">
              Добро пожаловать!
              <br /> Добро пожаловать на мой сайт. <br />
              Сами вы его выбрали, или его выбрали за вас — это 'лучший' сайт из
              оставшихся. Я такого высокого мнения об этом сайте, что решил
              разместить свои контактные данные здесь, в разделе&nbsp;
              <span className="ajax reference" query="contacts">
                контакты
              </span>
              , столь заботливо предоставленным нашим разработчиком. <br />
              Я горжусь тем, что называю этот сайт своим домом. <br />
              Итак, собираетесь ли вы остаться здесь, или же вас ждут
              неизвестные дали, добро пожаловать на этот сайт. <br />
              Здесь безопасно.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
