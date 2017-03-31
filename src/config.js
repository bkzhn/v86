"use strict";
/*
 * Compile time configuration, some only relevant for debug mode
 */

/**
 * @define {boolean}
 * Overridden for production by closure compiler
 */
var DEBUG = true;

/** @const */
var LOG_TO_FILE = false;

/**
 * @const
 * Enables logging all IO port reads and writes. Very verbose
 */
var LOG_ALL_IO = false;


var LOG_LEVEL = LOG_ALL & ~LOG_PS2 & ~LOG_PIT & ~LOG_VIRTIO & ~LOG_9P & ~LOG_PIC &
                          ~LOG_DMA & ~LOG_SERIAL & ~LOG_NET & ~LOG_FLOPPY & ~LOG_DISK;


/** @const */
var ENABLE_HPET = DEBUG && false;

/** @const */
var ENABLE_ACPI = DEBUG && false;


/**
 * @const
 * How many cycles the CPU does at a time before running hardware timers
 */
var LOOP_COUNTER = 11001;

/**
 * @const
 * How often, in milliseconds, to yield to the browser for rendering and
 * running events
 */
var TIME_PER_FRAME = 1;

/**
 * @const
 * How many ticks the TSC does per millisecond
 */
var TSC_RATE = 8 * 1024;