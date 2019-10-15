// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export const state = () => ({
    flags: {}
});

export const mutations = {
    setFlags (state, flagObject) {
        state.flags = flagObject;
    },
    clearFlags (state, ) {
        state.flags = {}
    },
    setFlag (state, kv) {
        state.flags[kv.key] = kv.value;
    },
};

export const actions = {
    async nuxtServerInit({ commit, state }, { req }) {

        const flags = await this.$axios.$get(`/api/flags`);
        commit('setFlags', flags);

        console.log(`nuxtServerInit req.session.id`, req.session.id);
        // req.session is not defined
        if (req.locals && req.locals.user) {
            console.log(`nuxtServerInit store state setProfile req.user`, req.user);
            commit('user/setProfile', req.locals.user)
        }
    }
};
