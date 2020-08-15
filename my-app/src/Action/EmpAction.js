import api from "./api";

/* export function getEmployee() {  
    return dispatch => {  
        return dispatch({  
            type: 'GET_EMPLOYEE'  
        });  
    }  
};   */

export function getEmployee() {
  return (dispatch) => {
    api
      .dEmployee()
      .fetchall()
      .then((Response) => {
        dispatch({
          type: "GET_EMPLOYEE",
          payload: Response.data,
        });
      })
      .catch((err) => console.log(err));
  };
}

/* export function addEmployee(data) {
  return (dispatch) => {
    return dispatch({
      type: "ADD_EMPLOYEE",
      payload: data,
    });
  };
} */
export const addEmployee = (data, onSuccess) => (dispatch) => {
  // data = formatData(data);
  console.log("sam");
  console.log(data);
  api
    .dEmployee()
    .create(data)
    .then((Response) => {
      dispatch({
        type: "ADD_EMPLOYEE",
        actplay: Response.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

/* export function editEmployee(data) {
  return (dispatch) => {
    return dispatch({
      type: "EDIT_EMPLOYEE",
      payload: data,
    });
  };
} */
export const editEmployee = (EmpId, data, onSuccess) => (dispatch) => {
  //data = formatData(data);
  window.alert(EmpId);

  api
    .dEmployee()
    .update(data)
    .then((Response) => {
      dispatch({
        type: "EDIT_EMPLOYEE",
        payload: { ...data },
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

/* export function deleteEmployee(employeeId) {
  return (dispatch) => {
    return dispatch({
      type: "DELETE_EMPLOYEE",
      payload: employeeId,
    });
  };
}
 */

export const deleteEmployee = (EmpId, onSuccess) => (dispatch) => {
  window.alert(EmpId);
  api

    .dEmployee()
    .delete(EmpId)
    .then((Response) => {
      dispatch({
        type: "DELETE_EMPLOYEE",
        actplay: EmpId,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};
