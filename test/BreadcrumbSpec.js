import React from 'react';
import { findDOMNode } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import Breadcrumb from '../src/Breadcrumb';

describe('Breadcrumb', () => {

  it('Should apply id to the wrapper ol element', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Breadcrumb id="custom-id" />
    );

    let olNode = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'ol');

    assert.equal(olNode.id, 'custom-id');
  });

  it('Should have breadcrumb class', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Breadcrumb />
    );

    let olNode = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'ol');
    assert.include(olNode.className, 'breadcrumb');
  });

  it('Should have custom classes', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Breadcrumb className="custom-one custom-two" />
    );

    let olNode = findDOMNode(ReactTestUtils.findRenderedComponentWithType(instance, Breadcrumb));

    let classes = olNode.className;
    assert.include(classes, 'breadcrumb');
    assert.include(classes, 'custom-one');
    assert.include(classes, 'custom-two');
  });

  it('Should have a navigation role', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Breadcrumb />
    );

    let olNode = findDOMNode(ReactTestUtils.findRenderedComponentWithType(instance, Breadcrumb));
    assert.equal(olNode.getAttribute('role'), 'navigation');
  });

  it('Should have an aria-label in ol', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Breadcrumb />
    );

    let olNode = findDOMNode(ReactTestUtils.findRenderedComponentWithType(instance, Breadcrumb));
    assert.equal(olNode.getAttribute('aria-label'), 'breadcrumbs');
  });

  it('Should have a custom className', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Breadcrumb className="custom" />
    );
    assert.ok(findDOMNode(instance).className.match(/\bcustom\b/));
  });

  it('Should have a custom style', () => {
    const fontSize = '12px';
    let instance = ReactTestUtils.renderIntoDocument(
      <Breadcrumb style={{ fontSize }} />
    );
    assert.equal(findDOMNode(instance).style.fontSize, fontSize);
  });

});
