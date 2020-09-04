# -*- coding: utf-8 -*-
"""
Created on Fri May  8 14:43:09 2020

@author: rodri
"""

def runnerUpScore(arr):
    unique = sorted(list(set(arr)))
    print(unique)
    print("Length of unique: " + str(len(unique)))
    runnerUpPos = len(unique) - 2
    print("Runner up list position: " + str(runnerUpPos))
    print("Runner up position:" + str(unique[runnerUpPos]))
    
myArray = [57, 57, -57, 57]

runnerUpScore(myArray)