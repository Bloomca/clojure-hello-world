(ns hello-world.core
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {
    :text "Hello CLJS Application"
    :counter 0
    :contacts []
    }))

(defn incrementCounter [data]
    (om/transact! data :counter inc))

(om/root
    (fn [data owner]
        (reify om/IRender
            (render [_]
                (dom/div #js {:className "container"}
                    (dom/h1 nil (:text data))
                    (dom/button #js {:className "button" :onClick #(incrementCounter data)} "Click me!")
                    (dom/span nil (:counter data))))))
                app-state
                {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
