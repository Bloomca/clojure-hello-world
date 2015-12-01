(defproject hello-world "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :source-paths ["src/clj"]
  ;; THIS IS VERY IMPORTANT ALWAYS START WITH CLOSURE THEN CLOJURESCRIPT
  :dependencies [[org.clojure/clojure "1.7.0"]
                 ;; without (exclusions) it could fail with build
                 [org.clojure/clojurescript "1.7.58" :exclusions [org.apache.ant/ant]]
                 [compojure "1.4.0"]
                 [ring/ring-core "1.3.2"]
                 [ring/ring-json "0.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [org.omcljs/om "0.9.0"]]
  ;; this section is for commands, they would be available with: lein %command%, like lein ring
  :plugins [
    [lein-ring "0.9.7"]
    [lein-pdo "0.1.1"]
    [lein-cljsbuild "1.1.1"]
    [lein-figwheel "0.5.0-1"]]
  :cljsbuild {
    :builds
    [{
        :id "dev"
        :figwheel {:on-jsload "hello_world.core/on-js-reload"}
        :source-paths ["src/cljs"]
        :compiler {
            :main hello_world.core
            :output-to "resources/public/js/main.js"
            :output-dir "resources/public/js/out"
            :source-map "resources/public/js/main.js.map"
            :optimizations :whitespace
            :pretty-print true}}
     {
         :id "min"
         :source-paths ["src/cljs"]
         :optimizations :advanced
         :pretty-print false}]}
  :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
    ;; :server-port 3449 ;; default
    ;; :server-ip "127.0.0.1"

    :css-dirs ["resources/public/css"] ;; watch and update CSS

    ;; Start an nREPL server into the running figwheel process
    ;; :nrepl-port 7888

    ;; To be able to open files in your editor from the heads up display
    ;; you will need to put a script on your path.
    ;; that script will have to take a file path and a line number
    ;; ie. in  ~/bin/myfile-opener
    ;; #! /bin/sh
    ;; emacsclient -n +$2 $1
    ;;
    ;; :open-file-command "myfile-opener"

    ;; if you want to disable the REPL
    ;; :repl false

    ;; to configure a different figwheel logfile path
    ;; :server-logfile "tmp/logs/figwheel-logfile.log"
     }
  :aliases {
      "up" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]
      "client" ["cljsbuild auto"]
  }
  :ring {:handler hello-world.handler/app}
  :profiles
      {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                            [ring/ring-mock "0.3.0"]]}})
