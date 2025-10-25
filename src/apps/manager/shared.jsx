// export const WINDOW_TITLE = "Менеджер справки";
// export const WINDOW_ICON = "img/manager.svg";
// export const WINDOW_APP_MANAGER = "explorer";
// export const WINDOW_DEFAULT_QUERY = "main-page";
//
// appsMetas.set(
//   WINDOW_APP_MANAGER,
//   lazy(() => import("./WindowExplorer"))
// );
//
// cmds.set("manager", () => {
//   createExplorer();
//   return "Открываю менеджер справки";
// });
//
// export function createExplorer(title, query) {
//   return createApp(title, query);
// }
//
// const byQuery = (state, query) => {
//   return state.windows.list.find(
//     (v) => v.type === WINDOW_APP_MANAGER && v.query === query
//   );
// };
//
// export function createApp(title, query) {
//   return store.dispatch(
//     addWindow({
//       title: title || "menu1",
//       icon: WINDOW_ICON,
//       type: WINDOW_APP_MANAGER,
//       query: query || WINDOW_DEFAULT_QUERY,
//       width: "50em",
//       height: "20em",
//     })
//   );
// }
//
// export const setWindowQuery = (title, query, winid = undefined) => {
//   if (winid) {
//     store.dispatch(setCurrentWindowById(winid));
//     return store.dispatch(
//       updateWindow({
//         id: winid,
//         title,
//         query,
//         collapsed: false,
//       })
//     );
//   }
//
//   const quered = byQuery(store.getState(), query);
//   if (quered) {
//     store.dispatch(setCurrentWindowById(quered.id));
//     return store.dispatch(
//       updateWindow({
//         id: quered.id,
//         collapsed: false,
//       })
//     );
//   }
//
//   const current = byId(store.getState(), store.getState().windows.current?.id);
//   if (current && current.type == WINDOW_APP_MANAGER) {
//     store.dispatch(setCurrentWindowById(current.id));
//     return store.dispatch(
//       updateWindow({
//         id: current.id,
//         title,
//         query,
//         collapsed: false,
//       })
//     );
//   }
//
//   const win = byType(store.getState(), WINDOW_APP_MANAGER);
//   if (win) {
//     store.dispatch(setCurrentWindowById(win.id));
//     return store.dispatch(
//       updateWindow({
//         id: win.id,
//         title,
//         query,
//         collapsed: false,
//       })
//     );
//   }
//   return createApp(title, query);
// };
