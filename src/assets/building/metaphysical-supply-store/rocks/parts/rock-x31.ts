import rock_x31_bin from './rock-x31.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_transmission",
		"KHR_materials_ior"
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
			"name": "rock.032",
			"rotation": [
				-0.8412343263626099,
				0.111457958817482,
				-0.4614001512527466,
				0.25886639952659607
			],
			"translation": [
				0.4799315333366394,
				1.8623415231704712,
				-3.522087812423706
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_transmission": {
					"transmissionFactor": 1
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Material.001",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.8394935727119446,
					0.8394935727119446,
					0.8394935727119446,
					1
				],
				"metallicFactor": 0.921450138092041,
				"roughnessFactor": 0.17824772000312805
			}
		}
	],
	"meshes": [
		{
			"name": "rock",
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
			"count": 325,
			"max": [
				0.44177138805389404,
				0.3639397919178009,
				0.5632484555244446
			],
			"min": [
				-0.39199399948120117,
				-0.7786651849746704,
				-0.4389283359050751
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 325,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 325,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 864,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 3358,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 3360,
			"uri": rock_x31_bin
		}
	]
}