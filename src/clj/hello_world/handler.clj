(ns hello-world.handler
    ;; refer all methods from compojure without prefix
  (:require [compojure.core :refer :all]
            ;; same for books
            [hello-world.books :refer :all]
            ;; importing namespace via prefix
            [compojure.route :as route]
            ;; importing only specific funcitons
            [ring.util.response :refer [response resource-response content-type]]
            [ring.middleware.json :as middleware]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]))

(defroutes app-routes
    (GET "/" []
        ;; chaining to prevent nesting
        (->
            (resource-response "index.html" {:root "public"})
            ;; content-type for correct treatment by browsers
            (content-type "text/html; charset=utf-8")
        ))
    (GET "/books" [] (response (get-books)))
    ;; for static
    (route/resources "/")
    (route/not-found "Not Found"))

(def app
    (-> app-routes
        ;; for automatic parsing requests
        (middleware/wrap-json-body)
        ;; for automatic parsing response
        (middleware/wrap-json-response)
        ;; don't know what it is))
        (wrap-defaults api-defaults)))
