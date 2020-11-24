from models import WhatNxtModel


class WhatNxtService:
    def __init__(self):
        self.model = WhatNxtModel()

    def create(self, params):
        return self.model.create(params)

    def delete(self, item_id):
        return self.model.delete(item_id)

    def update(self, item_id, params):
        return self.model.update(item_id, params)

    def list(self):
        return self.model.list_items()
