export enum WorkCode {
  WAITER = "waiter",
  STROY_SERVICE = "stroyService",
  CHAYNX = "chaynx",
  M_TECH = "mTech",
}

export const workList: Set<WorkCode> = new Set([
  WorkCode.WAITER,
  WorkCode.STROY_SERVICE,
  WorkCode.CHAYNX,
  WorkCode.M_TECH,
]);

export const workDateMapper: Record<
  WorkCode,
  { dateStart: Date; dateEnd?: Date }
> = {
  [WorkCode.WAITER]: {
    dateStart: new Date("2015-12"),
    dateEnd: new Date("2017-07"),
  },
  [WorkCode.STROY_SERVICE]: {
    dateStart: new Date("2017-04"),
    dateEnd: new Date("2017-10"),
  },
  [WorkCode.CHAYNX]: {
    dateStart: new Date("2017-10"),
    dateEnd: new Date("2018-11"),
  },
  [WorkCode.M_TECH]: {
    dateStart: new Date("2018-11"),
  },
};
