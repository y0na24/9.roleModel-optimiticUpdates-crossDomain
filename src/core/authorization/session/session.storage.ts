import type { KeyValueStorage } from "@/shared/storages/storages.types";
import type { Session } from "./session.types";
import { inject, injectable } from "inversify";
import { KEY_VALUE_STORAGE_TOKEN } from "@/shared/module/shared.tokens";
import { atom } from "@reatom/core";

const SESSION_KEY = "SESSION_KEY";

@injectable()
export class SessionStorage {
  session = atom<Session>();

  constructor(
    @inject(KEY_VALUE_STORAGE_TOKEN)
    private storage: KeyValueStorage,
  ) {
    const loadCurrentSession = async () => {
      const session = await this.getSession();

      if (session) {
        this.session.set(session);
      }
    };

    loadCurrentSession();
  }

  getSession = () => {
    const session = this.storage.get<Session>(SESSION_KEY);

    return session;
  };

  setSession = (session: Session) => {
    this.session.set(session);
    return this.storage.set<Session>(SESSION_KEY, session);
  };

  clearSession = () => {
    this.storage.delete(SESSION_KEY);
  };
}
