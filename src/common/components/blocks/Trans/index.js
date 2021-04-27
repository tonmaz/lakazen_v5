/**
 * Trans
 */
import React from "react";

import common from "../../../lib/translations/common_en.json";
import { loadTranslations } from "@src/common/lib/functions/extractTranslations";
import useTranslation from "next-translate/useTranslation";

export function Trans(props) {
  const { t } = useTranslation("common");
  const tr = loadTranslations(common, t);
  console.log(tr);
  return (
    <div>
      <p>Trans component</p>
      {tr.something}
    </div>
  );
}
