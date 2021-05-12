#!/bin/bash

oc process -n trigo-internal-prod -f templates/design-system-docs.yaml | oc apply -n trigo-internal-prod -f -
