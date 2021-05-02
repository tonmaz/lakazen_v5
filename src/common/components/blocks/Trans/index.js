/**
 * Trans
 */
import React from "react";

import common from "@src/common/lib/translations/common_en.json";
import { loadTranslations } from "@src/common/lib/functions/extractTranslations";
import useTranslation from "next-translate/useTranslation";

export function Trans(props) {
  const { t } = useTranslation("common");
  const tr = loadTranslations(common, t);
  console.log(tr);
  return (
    <div className="text-3xl">
      <p>Trans component</p>
      {tr.something}
    </div>
  );
}
