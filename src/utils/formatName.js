// @flow

export const formatName = (firstName?: string, lastName?: string) =>
  `${firstName || ""} ${lastName || ""}`;
