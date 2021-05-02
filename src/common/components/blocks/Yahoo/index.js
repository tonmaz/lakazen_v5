/**
 * Yahoo
 */
import React from "react";
import common from "@src/common/lib/translations/common_en.json";
import { loadTranslations } from "@src/common/lib/functions/extractTranslations";
import useTranslation from "next-translate/useTranslation";

export function Yahoo({ posts }) {
  const { t } = useTranslation("common");
  const tr = loadTranslations(common, t);

  return (
    <div className="w-96 w-full sm:w-11/12 min-w-min-content rounded-xl mx-auto px-8 py-8 bg-yellow-50 shadow-xl">
      {posts.map((p) => (
        <div
          key={p.id}
          className="space-y-4 mb-2 px-4 leading-8 bg-gray-50 rounded-lg"
        >
          {p.description}
        </div>
      ))}
    </div>
  );
}
