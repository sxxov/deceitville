import clock_text_7_bin from './clock-text-7.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "clock, text, 7",
			"rotation": [
				0,
				0.9659258723258972,
				0,
				0.2588193118572235
			],
			"translation": [
				-0.4150906503200531,
				0.022804586216807365,
				0.7189578413963318
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"name": "Material.004",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0,
					0,
					0,
					1
				],
				"metallicFactor": 0,
				"roughnessFactor": 0.5
			}
		}
	],
	"meshes": [
		{
			"name": "Text.007",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 70,
			"max": [
				0.036186765879392624,
				0.0010000000474974513,
				0.10894941538572311
			],
			"min": [
				-0.03813229501247406,
				-0.0010000000474974513,
				-0.16342411935329437
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 70,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 70,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 156,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 639,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 640,
			"uri": clock_text_7_bin
		}
	]
}