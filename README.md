# hello-world

FIXME

## Prerequisites

You will need [Leiningen][] 2.0.0 or above installed.

[leiningen]: https://github.com/technomancy/leiningen

## Running

To start a web server for the application, run:

    lein ring server

The all above is from boilerplate.

I personally started with
```
lein ring server-headless
```

For client side bundling run:
```
lein figwheel
```

Both commands would watch and recompile any changes.

The app itself has two endpoints: */* and */books*.
The first one is simple counter app in Om, and the second is JSON test.

## License

Copyright © 2015 MIT
