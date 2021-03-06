require("montage-testing").run(require,[
        // Please keep in alphabetical order
        "application-spec",
        "bitfield-spec",
        "claimed-pointer-spec",
        "converter-spec",
        "enum-spec",
        "gate-spec",
        "logger-spec",
        "paths-spec",
        "require-spec",
        "state-chart-spec",
        "string-spec",

        "base/abstract-button-spec",
        "base/abstract-checkbox-spec",
        "base/abstract-image-spec",
        "base/abstract-link-spec",
        "base/abstract-number-field-spec",
        "base/abstract-radio-button-spec",
        "base/abstract-select-spec",
        "base/abstract-slider-spec",
        "base/abstract-text-area-spec",
        "base/abstract-text-field-spec",
        "base/abstract-toggle-button-spec",

        "bindings/spec",
        "bindings/converter-spec",
        "bindings/self-spec",

        "composer/composer-spec",
        "composer/press-composer-spec",
        "composer/translate-composer/translate-composer-spec",

        "core/core-spec",
        "core/dom-spec",
        "core/localizer-spec",
        "core/localizer/serialization-spec",
        "core/radio-button-controller-spec",
        "core/selector-spec",
        "core/super-spec",
        "core/undo-manager-spec",

        "core/tree-controller-spec",

        "core/extras/function",
        "core/extras/string",

        "events/active-target-spec",
        "events/eventmanager-spec",
        "events/mutable-event-spec",
        "events/object-hierarchy-spec",

        "geometry/cubicbezier-spec",
        "geometry/point-spec",

        "meta/blueprint-spec",
        "meta/component-blueprint-spec",
        "meta/controller-blueprint-spec",
        "meta/converter-blueprint-spec",
        "meta/build-in-component-blueprint-spec",

        "reel/template-spec",
        "document-resources-spec",

        "serialization/serialization-spec",
        "serialization/montage-serializer-spec",
        "serialization/montage-deserializer-spec",
        "serialization/serialization-extractor-spec",
        "serialization/bindings-spec",
        "serialization/serialization-inspector-spec",
        "serialization/serialization-merger-spec",

        "trigger/trigger-spec",

        "ui/component-spec",
        "ui/condition-spec",
        "ui/firstdraw-spec",
        "ui/loader-spec",
        "ui/overlay-spec",
        // Broken due to changes to repetition
        "ui/repetition-spec",
        "ui/repetition-selection-spec",
        "ui/slot-spec",
        "ui/substitution-spec",
        "ui/text/text-spec"
]);
