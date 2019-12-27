export function registerPlanRequest(plan) {
  return {
    type: '@plans/ADD_REQUEST',
    payload: { plan },
  };
}

export function registerPlanSuccess() {
  return {
    type: '@plan/ADD_SUCCESS',
  };
}

export function updatePlanRequest(plan) {
  return {
    type: '@plan/UPDATE_REQUEST',
    payload: { plan },
  };
}

export function updatePlanSuccess(plan) {
  return {
    type: '@plan/UPDATE_SUCESS',
    payload: { plan },
  };
}

export function deletePlanRequest(id) {
  return {
    type: '@plan/DELETE_REQUEST',
    payload: { id },
  };
}
