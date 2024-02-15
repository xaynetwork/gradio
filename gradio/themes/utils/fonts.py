from __future__ import annotations

import json
from typing import Iterable


class FontEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Font):
            return {
                "__gradio_font__": True,
                "name": obj.name,
                "class": "font",
            }
        # Let the base class default method raise the TypeError
        return json.JSONEncoder.default(self, obj)


def as_font(dct):
    if "__gradio_font__" in dct:
        name = dct["name"]
        return Font(name)
    return dct


class Font:
    def __init__(self, name: str):
        self.name = name

    def __str__(self) -> str:
        return (
            self.name
            if self.name in ["sans-serif", "serif", "monospace", "cursive", "fantasy"]
            else f"'{self.name}'"
        )

    def stylesheet(self) -> str:
        return None

    def __eq__(self, other: Font) -> bool:
        return self.name == other.name and self.stylesheet() == other.stylesheet()

    def __repr__(self) -> str:
        klass = type(self)
        class_repr = klass.__module__ + "." + klass.__qualname__
        attrs = ", ".join([k + "=" + repr(v) for k, v in self.__dict__.items()])
        return f"<{class_repr} ({attrs})>"
