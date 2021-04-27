/**
 * Yahoo
 */
import React from "react";
import common from "@src/common/lib/translations/common_en.json";
import { loadTranslations } from "@src/common/lib/functions/extractTranslations";
import useTranslation from "next-translate/useTranslation";

export function Yahoo(props) {
  const { t } = useTranslation("common");
  const tr = loadTranslations(common, t);

  return <div>{tr.something}</div>;
}
