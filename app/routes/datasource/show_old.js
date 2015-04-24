/*
 * Copyright (c) 2015 Yahoo Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    datasource: {
      refreshModel: true,
    }
  },

<<<<<<< HEAD:app/routes/datasource/show_old.js
  model: function (params) {
    return this.store.find('datasource-info', params.id);
  }
=======
// Replace this with your real tests.
test('it works', function(assert) {
  assert.equal(
  	truncatedString('this is a test', {hash: {width: 10}}).string,
  	'this is<span data-toggle="tooltip" data-placement="auto" title="this is a test">...</span>',
  	'String should be truncated accurately'
  );
>>>>>>> upstream:tests/unit/helpers/truncated-string-test.js
});